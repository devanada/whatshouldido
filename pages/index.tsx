import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import axios from "axios";
import * as z from "zod";
import type { NextPage } from "next";

import Container from "components/Container";
import TodoCard from "components/TodoCard";
import { Input } from "components/Input";
import Button from "components/Button";

import { TodoType } from "utils/types/Todo";

interface Props {
  todos: TodoType[];
}

const schema = z.object({
  content: z.string().min(1, { message: "Required" }),
});

export async function getServerSideProps() {
  const res = await axios.get("https://api.todoist.com/rest/v2/tasks", {
    headers: {
      Authorization: "Bearer c11ca453e32ba9c2af7a5e196320885debfae075",
    },
  });
  return {
    props: {
      todos: res.data,
    },
  };
}

const Home: NextPage<Props> = ({ todos }) => {
  const router = useRouter();
  const { reset, register, handleSubmit } = useForm({
    resolver: zodResolver(schema),
  });

  function handleAddTask(data: TodoType) {
    axios
      .post("https://api.todoist.com/rest/v2/tasks", data, {
        headers: {
          Authorization: "Bearer c11ca453e32ba9c2af7a5e196320885debfae075",
        },
      })
      .then((res) => {
        alert("Berhasil menambahkan todo");
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        reset();
        router.replace(router.asPath);
      });
  }

  return (
    <Container
      docTitle="Homepage | What Should I Do"
      docDesc="What Should I Do"
    >
      <div className="mb-4 flex w-1/2 flex-col items-center">
        <form
          className="flex w-full flex-col items-center"
          onSubmit={handleSubmit(handleAddTask)}
        >
          <Input
            register={register}
            id="input-add-todo"
            name="content"
            placeholder="What should I do?"
          />
          <Button id="btn-add-todo" label="Add" type="submit" />
        </form>
      </div>
      <div className="columns-2 gap-4 md:columns-3 lg:columns-5">
        {todos.map((todo) => (
          <TodoCard
            key={todo.id}
            content={todo.content}
            description={todo.description}
            created_at={todo.created_at}
          />
        ))}
      </div>
    </Container>
  );
};

export default Home;
