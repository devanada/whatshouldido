import { FaSync, FaClipboardList, FaCloud } from 'react-icons/fa';
import { getCookie } from 'cookies-next';
import { useRouter } from 'next/router';
import Lottie from 'lottie-react';
import type { NextPage } from 'next';

import Animation from 'public/json/man-with-task-list.json';
import Container from 'components/Container';
import Button from 'components/Button';

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <Container docTitle="Homepage | What Should I Do" docDesc="What Should I Do">
      <div className="flex h-full w-full flex-col items-center justify-center md:flex-row">
        <div className="flex h-full w-full items-center justify-center md:w-1/2">
          <Lottie loop autoplay animationData={Animation} />
        </div>
        <div className="flex h-full w-full flex-col items-center justify-center gap-6 p-10 pt-0 md:w-1/2 md:pt-10">
          <p className="text-justify text-lg text-dark dark:text-light">
            Welcome! This app is designed to help you stay organized and on top of your
            tasks, making it easy for you to keep track of what needs to be done. Whether
            you're a busy professional, a student, or just someone looking to stay
            organized, our app is the perfect tool for anyone looking to streamline their
            daily routine and stay productive!
          </p>
          <Button
            id="btn-login"
            label="Login Now"
            onClick={() => router.push('/login')}
          />
        </div>
      </div>
      <div className="flex h-full w-full flex-col items-center gap-5 p-6 text-dark dark:text-light md:flex-row">
        <div className="flex w-3/4 flex-col items-center gap-2 md:items-start">
          <FaClipboardList className="mr-2 h-11 w-11" aria-hidden="true" />
          <p className="text-lg font-bold tracking-wider">Increased Productivity</p>
          <p className="tracking-wider">
            Our app helps you stay organized and complete tasks efficiently.
          </p>
        </div>
        <div className="flex w-3/4 flex-col items-center gap-2 md:items-start">
          <FaSync className="mr-2 h-11 w-11" aria-hidden="true" />
          <p className="text-lg font-bold tracking-wider">User-friendly</p>
          <p className="tracking-wider">
            Simple and intuitive interface for easy task management.
          </p>
        </div>
        <div className="flex w-3/4 flex-col items-center gap-2 md:items-start">
          <FaCloud className="mr-2 h-11 w-11" aria-hidden="true" />
          <p className="text-lg font-bold tracking-wider">Accessibility</p>
          <p className="tracking-wider">
            Access your tasks from any device with internet access.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Home;
