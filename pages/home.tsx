import { zodResolver } from '@hookform/resolvers/zod';
import { GetServerSidePropsContext } from 'next';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { getCookie } from 'cookies-next';
import { useRouter } from 'next/router';
import axios from 'axios';
import * as z from 'zod';
import type { NextPage } from 'next';

import { Input, TextArea } from 'components/Input';
import Container from 'components/Container';
import TodoCard from 'components/TodoCard';
import Button from 'components/Button';
import Modal from 'components/Modal';

import { TodoType } from 'utils/types/Todo';

interface Props {
  todos: TodoType[];
}

const schema = z.object({
  content: z.string().min(5, { message: 'Required' }),
  description: z.string(),
});

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { req, res } = context;
  const accessToken = getCookie('access_token', { req, res });
  if (accessToken) {
    const response = await axios.get('https://api.todoist.com/rest/v2/tasks', {
      headers: {
        Authorization: `Bearer ${getCookie('access_token', { req, res })}`,
      },
    });
    return {
      props: {
        todos: response.data,
      },
    };
  } else {
    return {
      redirect: {
        permanent: false,
        destination: '/login',
      },
    };
  }
}

const Home: NextPage<Props> = ({ todos }) => {
  const router = useRouter();
  const accessToken = getCookie('access_token');
  const [modalDetail, setModalDetail] = useState<boolean>(false);
  const [todoDetail, setTodoDetail] = useState<TodoType>({});

  const { reset, register, handleSubmit } = useForm({
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    handleDetail();
  }, [router]);

  function handleDetail() {
    const { todo_id } = router.query;
    if (todo_id) {
      axios
        .get(`https://api.todoist.com/rest/v2/tasks/${todo_id}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((res) => {
          const { data } = res;
          setTodoDetail(data);
          setModalDetail(true);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  function handleAddTodo(data: TodoType) {
    axios
      .post('https://api.todoist.com/rest/v2/tasks', data, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((res) => {
        alert('Berhasil menambahkan todo');
      })
      .catch((err) => {
        alert(err.toString());
      })
      .finally(() => {
        reset();
        router.replace(router.asPath);
      });
  }

  function handleDeleteTodo(todo: TodoType) {
    const { todo_id } = router.query;
    if (todo_id) {
      setModalDetail(false);
      setTodoDetail({});
    }
    axios
      .delete(`https://api.todoist.com/rest/v2/tasks/${todo.id}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then(() => {
        alert('Berhasil hapus todo');
        // router.replace(router.asPath);
        router.push('/home');
      })
      .catch((err) => alert(err.toString()));
  }

  return (
    <Container docTitle="Homepage | What Should I Do" docDesc="What Should I Do">
      <div className="my-4 flex w-3/4 flex-col items-center">
        <form
          className="flex h-full w-full flex-col items-center gap-3"
          onSubmit={handleSubmit(handleAddTodo)}
        >
          <Input
            register={register}
            id="input-add-todo"
            name="content"
            placeholder="What should I do?"
          />
          <TextArea
            register={register}
            id="input-add-description"
            name="description"
            placeholder="Is there anything to descript what should I do?"
          />
          <Button id="btn-add-todo" label="Add" type="submit" />
        </form>
      </div>
      <div className="columns-2 gap-4 md:columns-3 lg:columns-5">
        {todos.map((todo) => (
          <TodoCard
            key={todo.id}
            id={todo.id}
            content={todo.content}
            description={todo.description}
            created_at={todo.created_at}
            onClickDelete={() => handleDeleteTodo(todo)}
          />
        ))}
      </div>
      <Modal
        isOpen={modalDetail}
        onClose={() => {
          setModalDetail(false);
          setTodoDetail({});
          router.push('/home');
        }}
        id="modal-detail-todo"
        data={todoDetail}
        onClickDelete={() => handleDeleteTodo(todoDetail)}
      />
    </Container>
  );
};

export default Home;
