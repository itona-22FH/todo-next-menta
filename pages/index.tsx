import Head from "next/head";
import styles from "../styles/Home.module.css";
import { SortButton } from "../components/SortButton";
import { ShowTodoList } from "../components/ShowTodoList";
import { TodoForm } from "../components/TodoForm";
import { Box, UnorderedList } from "@chakra-ui/react";

export default function Home() {
  const handleButtonDisabled = (todoArray: Todo[]) => {
    return todoArray.some((todo) => todo.edit);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Box
          bg="black"
          color="white"
          marginBottom={50}
          w={500}
          h={"3em"}
          borderRadius="md"
        >
          <h1
            style={{
              textAlign: "center",
              width: "100%",
              height: "100%",
              fontSize: "2em",
            }}
          >
            TODOリスト
          </h1>
        </Box>
        <TodoForm handleButtonDisabled={handleButtonDisabled} />
        <UnorderedList style={{ listStyle: "none" }}>
          <ShowTodoList handleButtonDisabled={handleButtonDisabled} />
        </UnorderedList>
        <div
          style={{
            display: "flex",
            width: 500,
            justifyContent: "space-around",
          }}
        >
          <SortButton
            sortKey="fix"
            text="完了タスク一覧"
            handleDisabled={handleButtonDisabled}
          />
          <SortButton
            sortKey="notFix"
            text="未完了タスク一覧"
            handleDisabled={handleButtonDisabled}
          />
          <SortButton
            sortKey="all"
            text="すべてのタスク一覧"
            handleDisabled={handleButtonDisabled}
          />
        </div>
      </main>
    </div>
  );
}
