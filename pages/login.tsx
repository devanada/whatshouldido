import { GetServerSidePropsContext } from 'next';
import { setCookie } from 'cookies-next';
import Lottie from 'lottie-react';
import axios from 'axios';
import React from 'react';
import type { NextPage } from 'next';

import Animation from 'public/json/checklist-cubaan.json';
import Container from 'components/Container';
import Button from 'components/Button';

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { query, req, res } = context;
  if (query.code) {
    const response = await axios.post('https://todoist.com/oauth/access_token', {
      client_id: process.env.NEXT_PUBLIC_TODOIST_CLIENT_ID,
      client_secret: process.env.TODOIST_CLIENT_SECRET,
      code: query.code,
      redirect_uri: 'http://localhost:3000/',
    });
    if (response.data.access_token) {
      setCookie('access_token', response.data.access_token, { req, res });
      return {
        redirect: {
          permanent: false,
          destination: '/home',
        },
      };
    }
  }
  return {
    props: {},
  };
}

const Login: NextPage = () => {
  function handleLogin() {
    document.location.href = `https://todoist.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_TODOIST_CLIENT_ID}&scope=data:read_write,data:delete`;
  }

  return (
    <Container docTitle="Homepage | What Should I Do" docDesc="What Should I Do">
      <div className="flex h-full w-full">
        <div className="flex h-full w-full flex-col justify-center p-3">
          <Lottie loop autoplay animationData={Animation} />
        </div>
        <div className="flex h-full w-full flex-col justify-center gap-6 p-3">
          <p className=" text-justify text-lg tracking-wider text-dark dark:text-light">
            Simplify your life with our amazing to-do list app! Say goodbye to scattered
            thoughts and cluttered schedules. With our user-friendly app, managing tasks
            has never been easier. Stay organized, stay on top of things and achieve your
            goals with ease.
          </p>
          <Button id="btn-login" label="Login" onClick={() => handleLogin()} />
        </div>
      </div>
    </Container>
  );
};

export default Login;
