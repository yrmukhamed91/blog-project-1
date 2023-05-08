import React, {useEffect, useState} from "react";
import "./homepage.css";
import CourseItem from "../../components/CourseItem/CourseItem";
import axios from 'axios'
import postService from '../../services/posts'

const HomePage = () => {
  const [posts, setPosts] = useState([])
  const [showAll, setShowAll] = useState(true)

  useEffect(() => {
    postService
      .getPosts()
        .then(res => {
          setPosts(res.data)
        })
  }, [])
  
  const filteredPosts = showAll ? posts : posts.filter(post => post.important === true) 

  const changeImportance = (id) => {
    const post = posts.find(post => post.id === id) // поиск элемента внутри массива
    const changedPost = {
      ...post,
      important : !post.important 
    }
    postService
      .editPost(changedPost, id)
        .then(res => setPosts(posts.map(post => post.id === id ? res.data : post)))
  }

  const deletePost = (id) => {
    axios
      .delete(`http://localhost:3001/posts/${id}`)
      .then(res => {
        setPosts(posts.filter(post => post.id !== id))
      })
  }

  return (
    <>
      <h1>Пройденный материал</h1>
      <button onClick={() => setShowAll(!showAll)}>
        Показать {showAll ? "только важные" : "все"}
      </button>
      <div className="course-list">
        {filteredPosts.map(course => {
          return (
            <CourseItem
              key={course.id}
              id={course.id}
              name={course.name}
              duration={course.duration}
              status={course.important}
              created_at={course.created_at}
              changeImportance={() => changeImportance(course.id)}
              deletePost={() => deletePost(course.id)}
            />
          );
        })}
      </div>
    </>
  );
};

export default HomePage;
