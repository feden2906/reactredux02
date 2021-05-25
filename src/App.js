import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./styles.css";

//Імпортуємо actions константи з папки redux
import {
  startPostsLoading,
  setPosts,
  stoptPostsLoading,
  setPostsError
} from "./redux";

const Posts = () => {
  const { posts, error, isPostLoading} = useSelector(({posts, error, isPostLoading}) => ({posts, error, isPostLoading}));
  const dispatch = useDispatch();

  const postsFetcher = async () => {
    try {
      dispatch(startPostsLoading());
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      console.log("Отримуємо об'єкти після fetch", data);

      dispatch(setPosts(data));
    } catch (e) {
      console.log(e);
      dispatch(setPostsError("Помилка завантаження публікацій"));
    } finally {
      dispatch(stoptPostsLoading());
    }
  };
  React.useEffect(() => {
    postsFetcher();
  }, []);
  //Якщо видасть помилку то поверне все що в контейнері h1 про помилку
  if (error) {
    return <h1>{error}</h1>;
  }
  if (isPostLoading) {
    return <h2>Публікації з jsonplaceholder успішно завантажені!</h2>;
  }

  return (
    <div>
      {posts.map(({ id, title, body }) => (
        <p key={id}>
          {title}---{body}
        </p>
      ))}
    </div>
  );
};

export default function App() {
  return (
    <div className="App">
      <Posts />
    </div>
  );
}
