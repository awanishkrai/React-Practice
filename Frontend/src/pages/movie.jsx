import axios from "axios";
import { useEffect, useState } from "react";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [formData,setFormData]=useState({
    userId:"",
    title:"",
    body:""
  })
  const handleChange=(e)=>{
    setFormData({...formData,
      [e.target.name]:e.target.value
    })
  }

  const api = "https://jsonplaceholder.typicode.com/posts";

  const getPosts = async () => {
    try {
      const res = await axios.get(api);
      setPosts(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  const addPosts=async(e)=>{
    e.preventDefault()
    try{
      const res=await axios.post(api,formData);
      setPosts(prev=>[res.data,...prev]);
      setFormData({
        userId:"",
        title:"",
        body:""
      })
    }
    catch(error){
      console.error(error);
    }
  }
  

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      <h1>Posts</h1>

      <form onSubmit={addPosts}>
        <label>Id: </label>
        <input type="text" name="userId" value={formData.userId} onChange={handleChange}/><br/><br/>
        <label>Title: </label>
        <input type="text" name="title" value={formData.title} onChange={handleChange}/><br/><br/>
        <label>Body :</label>
        <textarea name="body" value={formData.body} onChange={handleChange}/><br/>
        <button type="submit">ADD</button>
      </form>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)", // 3 equal columns
          gap: "20px",
        }}
      >
        {posts.map((post) => (
          <div
            key={post.id}
            style={{
              border: "2px solid black",
              padding: "10px",
              borderRadius: "5px",
            }}
          >
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <button>add</button>
            <button>update</button>
            <button>delete</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Posts;
