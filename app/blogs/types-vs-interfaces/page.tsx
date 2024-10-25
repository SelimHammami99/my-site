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
            Understanding Types vs. Interfaces in TypeScript for React Projects
          </h1>
          <p className="leading-7 text-sm mt-3 font-light">
            When working with TypeScript in a React project, understanding how
            and when to use <span className="font-bold">types</span> and{" "}
            <span className="font-bold">interfaces</span> is key to writing
            clean, maintainable, and type-safe code. Both types and interfaces
            are foundational tools in TypeScript for defining shapes and
            structures of data, but they come with differences that can make one
            more suitable than the other in specific scenarios. In this blog,
            we’ll break down these differences and look at best practices for
            using types and interfaces in a React project.
          </p>
          <h3 className="mt-8 scroll-m-20 text-md font-semibold tracking-tight border-b pb-2">
            What Are Types and Interfaces?
          </h3>
          <p className="leading-7 text-sm mt-3 font-light">
            Interfaces and types both help define the structure of data,
            ensuring that objects, functions, and variables follow the correct
            shape throughout your application. At a glance:
          </p>
          <ul className="my-4 ml-6 list-disc [&>li]:mt-2">
            <li className="text-sm">
              <span className="font-bold">Interfaces </span>
              {""}
              are specifically designed to define object shapes and can be
              extended. They’re perfect for defining component props or models
              with defined structures.
            </li>
            <li className="text-sm">
              <span className="font-bold">Types</span>, on the other hand, are
              more flexible and can define not just object shapes but also
              unions, intersections, and even primitive types.
            </li>
          </ul>
          <p className="leading-7 text-sm mt-3 font-light">
            While they seem similar, each has unique strengths. Let’s dive into
            some common use cases to better understand how they differ.
          </p>
          <h3 className="mt-8 scroll-m-20 text-md font-semibold tracking-tight border-b pb-2">
            Using Interfaces for React Component Props
          </h3>
          <p className="leading-7 text-sm mt-3 font-light">
            In React, interfaces are often the preferred choice for defining
            component props. Their ability to be extended allows for highly
            modular code, making interfaces ideal for creating reusable and
            structured components. For example, let’s define an interface for a
            simple button component:
          </p>
          <pre className="mt-6 p-4 bg-muted rounded">
            <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-medium">
              {`interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean; // Optional prop
}

const Button: React.FC<ButtonProps> = ({ label, onClick, disabled }) =>{
  return (
    <button onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
};`}
            </code>
          </pre>
          <p className="leading-7 text-sm mt-3 font-light">
            Using an interface here makes our ButtonProps structure clear and
            extendable. If we later want to create a special type of button that
            needs extra properties, we can extend ButtonProps easily:
          </p>
          <pre className="mt-6 p-4 bg-muted rounded">
            <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-medium">
              {`interface IconButtonProps extends ButtonProps {
  icon: JSX.Element;
}

const IconButton: React.FC<IconButtonProps> = ({ label, onClick, icon, 
disabled }) => {
  return (
    <button onClick={onClick} disabled={disabled}>
      {icon} {label}
    </button>
  );
};`}
            </code>
          </pre>
          <p className="leading-7 text-sm mt-3 font-light">
            The ability to extend ButtonProps allows us to reuse its core
            structure while adding custom properties to fit specific needs. This
            approach improves code organization and readability, especially as
            component libraries grow in size.
          </p>
          <h3 className="mt-8 scroll-m-20 text-md font-semibold tracking-tight border-b pb-2">
            When to Use Types in React: Flexibility and Unions
          </h3>
          <p className="leading-7 text-sm mt-3 font-light">
            Types offer versatility that interfaces lack, such as defining
            unions, intersections, or mapped types. In scenarios where we need
            conditional properties or more complex structures, types are
            typically more effective.
          </p>
          <p className="leading-7 text-sm mt-3 font-light">
            For instance, let’s say we want to define a Button with specific
            style variants, like primary or secondary. This is where types can
            really shine, as they allow us to create union types that restrict
            possible values:
          </p>
          <pre className="mt-6 p-4 bg-muted rounded">
            <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-medium">
              {`type ButtonVariant = 'primary' | 'secondary' | 'danger';

type ButtonProps = {
  label: string;
  onClick: () => void;
  variant: ButtonVariant; // This ensures only specific values 
  are allowed
};

const Button: React.FC<ButtonProps> = ({ label, onClick, variant }) => {
  return (
    <button className={\`btn-\${variant}\`} onClick={onClick}>
      {label}
    </button>
  );
};`}
            </code>
          </pre>
          <p className="leading-7 text-sm mt-3 font-light">
            In this example, ButtonVariant is a union type that restricts the
            variant prop to specific string values. If you try to pass anything
            other than 'primary', 'secondary', or 'danger', TypeScript will
            throw an error, ensuring consistency across your application.
          </p>
          <p className="leading-7 text-sm mt-3 font-light">
            Types also allow for intersections to combine multiple types. This
            can be useful for mixing multiple prop structures:
          </p>
          <pre className="mt-6 p-4 bg-muted rounded">
            <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-medium">
              {`type Clickable = { onClick: () => void };
type LinkProps = { href: string } & Clickable;

const LinkButton: React.FC<LinkProps> = ({ href, onClick }) => {
  return (
    <a href={href} onClick={onClick}>
      Go to Link
    </a>
  );
};`}
            </code>
          </pre>
          <p className="leading-7 text-sm mt-3 font-light">
            Here, LinkProps combines href and onClick properties, creating a
            custom prop structure that can be reused across other clickable
            elements. Using types for intersections is often simpler and clearer
            than doing the same with interfaces.
          </p>
          <h3 className="mt-8 scroll-m-20 text-md font-semibold tracking-tight border-b pb-2">
            Key Differences Between Types and Interfaces
          </h3>
          <p className="leading-7 text-sm mt-3 font-light">
            To decide between types and interfaces, it’s helpful to understand
            the distinctions:
          </p>

          <ul className="my-4 ml-6 list-disc [&>li]:mt-2">
            <li className="text-sm">
              <span className="font-bold">Extensibility: </span>
              {""}
              Interfaces can extend other interfaces, making them excellent for
              defining props with shared structures. Types cannot extend in the
              same way but can use intersections to combine multiple types.
            </li>
            <li className="text-sm">
              <span className="font-bold">Unions:</span> Types are the only
              option for creating union types. If you need to define a range of
              values for a property (like 'primary' | 'secondary'), a type is
              the way to go.
            </li>
            <li className="text-sm">
              <span className="font-bold">Complex Structures:</span> Types offer
              more flexibility with advanced structures, making them better for
              defining complex or conditional data structures.
            </li>
          </ul>
          <p className="leading-7 text-sm mt-3 font-light">
            In summary, interfaces are ideal for defining structured component
            props that may need extension, while types provide flexibility for
            unions, intersections, and more complex compositions. Both are
            essential tools in TypeScript, and understanding when to use each
            can make your React code more maintainable and scalable. By
            leveraging the strengths of both, you can write type-safe, efficient
            code that scales gracefully as your project grows.
          </p>
        </div>
        <Button
          variant={"outline"}
          className="font-semibold mt-4"
          onClick={() => router.push("/blogs")}
        >
          See all posts
        </Button>
      </div>
    </main>
  );
};
export default Page;
