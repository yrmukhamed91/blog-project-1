import React from "react";
import { Link } from "react-router-dom";
import moment from "moment"

const CourseItem = (props) => {
  const status = moment(props.created_at).isAfter(Date.now())
  console.log(moment(Date.now()).isAfter(props.created_at)) 
  return (
    <div className="course-item" style={status ? {backgroundColor: "green"} : {backgroundColor: "red"} }>
      <img src="https://picsum.photos/200/" className="course-item-img" />
      <p> Название:  {props.name} </p>
      <p> Продолжительность: {props.duration} м. </p>
      <p> Статус: {props.status ? 'Важный' : 'Неважный'} </p>

      <p> Дата публикации: {new Date(props.created_at).toString()} </p>

      <button onClick={props.changeImportance}>Сделать {props.status ? 'неважным' : 'важным'} </button>
      <button onClick={props.deletePost}>Удалить пост</button>
      <Link to={`/post/${props.id}`}>Подробнее</Link>
    </div>
  );
};

export default CourseItem;