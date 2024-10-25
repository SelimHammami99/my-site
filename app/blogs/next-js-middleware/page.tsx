"use client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

const Page = () => {
  const router = useRouter();
  return (
    <main className="flex min-w-screen flex-col items-center justify-between ">
      <div className="flex flex-col flex-wrap items-center justify-center mt-[3rem] mb-[6rem] p-3 w-full max-w-[650px]">
        <div className="flex flex-row justify-between w-full">
          <Button
            variant={"ghost"}
            className="font-semibold"
            onClick={() => router.push("/blogs")}
          >
            <ChevronLeft className="w-3 h-3" />
            See all posts
          </Button>
          <div className="flex items-center justify-center font-light text-xs text-gray-400">
            Published on 25-10-2024
          </div>
        </div>
        <div className="w-full mt-4">
          <h1 className="mt-10 scroll-m-20 border-b pb-2 text-lg font-semibold tracking-tight transition-colors first:mt-0">
            Next.js Middleware: A Modern Way to Control Requests and Responses
          </h1>
          <p className="leading-7 text-sm mt-3 font-light">
            In web development, controlling requests and responses efficiently
            can be a game-changer for both application performance and user
            experience. <span className="font-bold">Next.js Middleware</span> is
            a powerful feature introduced to help developers process requests in
            real time, allowing applications to modify requests and responses at
            the edge—meaning close to the user—before the main server handles
            them. With Middleware, you can easily add features like
            authentication, redirects, logging, or even A/B testing directly
            into the application flow without added latency.
          </p>
          <h3 className="mt-8 scroll-m-20 text-md font-semibold tracking-tight border-b pb-2">
            What is Middleware in Next.js?
          </h3>
          <p className="leading-7 text-sm mt-3 font-light">
            Middleware in Next.js runs before a request reaches its endpoint or
            completes. It intercepts requests and responses, allowing you to
            apply specific conditions to enhance the user experience based on
            real-time conditions. This is especially helpful for applications
            needing flexible control over traffic, such as e-commerce sites or
            dynamic SaaS applications, where certain pages may require custom
            processing based on the user’s authentication status or region.
          </p>
          <h3 className="mt-8 scroll-m-20 text-md font-semibold tracking-tight border-b pb-2">
            How Middleware Works in Next.js
          </h3>
          <p className="leading-7 text-sm mt-3 font-light">
            Next.js Middleware is typically defined in a middleware.js file at
            the project’s root level. Let’s look at a simple example where
            Middleware checks if a user is authenticated before accessing
            certain pages:
          </p>
          <pre className="mt-6 p-4 bg-muted rounded">
            <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-medium">
              {`import { NextResponse } from 'next/server';

export function middleware(request) {
  const loggedIn = request.cookies.get('token');
  if (!loggedIn) {
    return NextResponse.redirect('/login');
  }
}`}
            </code>
          </pre>
          <p className="leading-7 text-sm mt-3 font-light">
            In this example, the code checks for a token in the user’s cookies.
            If the token isn’t present, it means the user is not logged in, so
            they’re redirected to the login page. This logic allows protected
            routes to stay secure without adding complex conditions inside
            individual page components. You can also apply Middleware
            selectively to specific routes by configuring patterns within the
            middleware.js file, making it easy to protect sensitive areas of the
            application.
          </p>
          <h3 className="mt-8 scroll-m-20 text-md font-semibold tracking-tight border-b pb-2">
            Practical Use Cases for Next.js Middleware
          </h3>
          <ul className="my-4 ml-6 list-disc [&>li]:mt-2">
            <li className="text-sm">
              <span className="font-bold">
                Authentication and Authorization:
              </span>{" "}
              Quickly redirect unauthenticated users to login pages or block
              unauthorized access to specific routes.
            </li>
            <li className="text-sm">
              <span className="font-bold">
                A/B Testing and Experimentation:
              </span>{" "}
              Dynamically direct users to different versions of a page to test
              performance or user engagement.
            </li>
            <li className="text-sm">
              <span className="font-bold">
                Localization and Regional Redirection:
              </span>{" "}
              Detect a user’s region through their request headers and redirect
              them to a region-specific page.
            </li>
            <li className="text-sm">
              <span className="font-bold">Logging and Analytics:</span> Track
              request logs, errors, and custom metrics without additional
              backend setup.
            </li>
          </ul>
          <h3 className="mt-8 scroll-m-20 text-md font-semibold tracking-tight border-b pb-2">
            Benefits of Using Middleware
          </h3>
          <p className="leading-7 text-sm mt-3 font-light">
            Next.js Middleware offers a new layer of flexibility, enabling you
            to enhance the user experience, reduce server load, and improve
            speed. By handling these tasks before they reach the server,
            Middleware can streamline many processes that would traditionally
            slow down your app. As a result, it’s an ideal tool for optimizing
            performance in real-time, giving you complete control over how
            requests and responses are handled at the edge.
          </p>
        </div>
      </div>
    </main>
  );
};
export default Page;
