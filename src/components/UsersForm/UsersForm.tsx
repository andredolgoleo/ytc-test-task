import React from 'react';
import { useForm, useFieldArray, SubmitHandler } from 'react-hook-form';

type User = {
  username: string;
  email: string;
};

type FormData = {
  users: User[];
};

const UsersForm: React.FC = () => {
  const { register, control, handleSubmit } = useForm<FormData>({
    defaultValues: {
      users: [{ username: '', email: '' }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'users',
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log('User List:', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>User List</h2>

      {fields.map((field, index) => (
        <div key={field.id} style={{ marginBottom: '16px' }}>
          <div>
            <label htmlFor={`users[${index}].username`}>Username:</label>
            <input
              id={`users[${index}].username`}
              {...register(`users.${index}.username`, {
                required: 'Username is required',
              })}
              placeholder="Enter username"
            />
          </div>

          <div>
            <label htmlFor={`users[${index}].email`}>Email:</label>
            <input
              id={`users[${index}].email`}
              {...register(`users.${index}.email`, {
                required: 'Email is required',
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: 'Invalid email address',
                },
              })}
              placeholder="Enter email"
            />
          </div>

          <button
            type="button"
            onClick={() => remove(index)}
            style={{ color: 'red' }}
          >
            Remove User
          </button>
        </div>
      ))}

      <button type="button" onClick={() => append({ username: '', email: '' })}>
        Add User
      </button>

      <br />

      <button type="submit">Submit</button>
    </form>
  );
};

export default UsersForm;
