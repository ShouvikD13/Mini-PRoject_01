import { useEffect, useState } from "react";
import { Navigate, useParams, useNavigate } from "react-router-dom";
import Editor from "../Editor";

export default function EditPost() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [content, setContent] = useState('');
  const [files, setFiles] = useState('');
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:4000/post/${id}`)
      .then(response => response.json())
      .then(postInfo => {
        setTitle(postInfo.title);
        setContent(postInfo.content);
        setSummary(postInfo.summary);
      });
  }, [id]);

  async function updatePost(ev) {
    ev.preventDefault();
    const data = new FormData();
    data.set('title', title);
    data.set('summary', summary);
    data.set('content', content);
    data.set('id', id);
    if (files?.[0]) {
      data.set('file', files?.[0]);
    }
    const response = await fetch('http://localhost:4000/post', {
      method: 'PUT',
      body: data,
      credentials: 'include',
    });
    if (response.ok) {
      setRedirect(true);
    }
  }

  async function deletePost() {
    try {
      const response = await fetch(`http://localhost:4000/post/${id}`, {
        method: 'DELETE',
        credentials: 'include',
      });

      if (response.ok) {
        // Redirect to the homepage
        navigate('/');
      } else {
        // Handle error, e.g., log it or show a message to the user
        console.error('Error deleting post:', response.statusText);
      }
    } catch (error) {
      // Handle network or other errors
      console.error('Network or other error:', error.message);
    }
  }

  if (redirect) {
    return <Navigate to={`/post/${id}`} />;
  }

  return (
    <div style={{ maxWidth: '600px', margin: 'auto', paddingBottom: '60px' }}>
      <form onSubmit={updatePost}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(ev) => setTitle(ev.target.value)}
          style={{ width: '100%', marginBottom: '10px' }}
        />
        <input
          type="text"
          placeholder="Summary"
          value={summary}
          onChange={(ev) => setSummary(ev.target.value)}
          style={{ width: '100%', marginBottom: '10px' }}
        />
        <input
          type="file"
          onChange={(ev) => setFiles(ev.target.files)}
          style={{ marginBottom: '10px' }}
        />
        <Editor onChange={setContent} value={content} />
        <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'space-between' }}>
          <button type="submit">Update Post</button>
          <button type="button" onClick={deletePost}>Delete Post</button>
        </div>
      </form>
    </div>
  );
}
