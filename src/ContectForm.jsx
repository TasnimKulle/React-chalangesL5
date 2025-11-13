import { useEffect, useState } from 'react';

const ContectForm = ({ dispatch, editContect, setEditContact }) => {
  const [contect, setContect] = useState({
    id: null,
    name: '',
    email: '',
    phone: '',
  });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (editContect) {
      setContect(editContect);
      setIsEditing(true);
    }
  }, [editContect]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContect({ ...contect, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      dispatch({ type: 'edit', payload: contect });
      setIsEditing(false);
      setEditContact(null);
    } else {
      dispatch({
        type: 'add',
        payload: { ...contect, id: crypto.randomUUID(), favorite: false },
      });
    }
    setContect({ id: null, name: '', email: '', phone: '' });
  };

  const handleCancel = () => {
    setContect({ id: null, name: '', email: '', phone: '' });
    setIsEditing(false);
    setEditContact(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>{isEditing ? 'Edit Contact' : 'Add New Contact'}</h3>
      <div>
         <label>
            Name
            <input name="name" value={contect.name} onChange={handleChange} required />
         </label>
      </div>
      <div>
         <label >
            Email:
             <input name="email" value={contect.email} onChange={handleChange} required />
         </label>
      </div>
      <div>
         <label>
            phone:
             <input name="phone" value={contect.phone} onChange={handleChange} required />
         </label>
      </div>
     
      <button type="submit">{isEditing ? 'Update' : 'Add'}</button>
      {isEditing && <button onClick={handleCancel}>Cancel</button>}
    </form>
  );
};
export default ContectForm;
