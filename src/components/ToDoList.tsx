import { useForm } from 'react-hook-form';

interface IForm {
  email: string;
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  password1: string;
  extraError: string;
}

function ToDoList() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IForm>({
    defaultValues: {
      email: '@gmail.com',
    },
  });
  const onValid = (data: IForm) => {
    if (data.password !== data.password1) {
      setError(
        'password1',
        { message: '비밀번호가 동일하지 않습니다' },
        { shouldFocus: true },
      );
    }
    // setError('extraError', { message: '네트워크가 이상합니다' });
  };
  return (
    <div>
      <form
        style={{ display: 'flex', flexDirection: 'column' }}
        onSubmit={handleSubmit(onValid)}
      >
        <input
          {...register('email', {
            required: '이메일은 필수입력항목입니다',
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@gmail.com$/,
              message: '지메일 계정으로만 가입이 가능합니다',
            },
          })}
          placeholder="Email"
        />
        <span>{errors?.email?.message}</span>
        <input
          {...register('firstName', {
            required: 'write here',
            validate: {
              noCreatehb21: (value) =>
                !value.includes('hb21') ? 'no hb21 allowed' : true,
              noHanvit: (value) =>
                !value.includes('hanvit') ? 'no hanvit allowed' : true,
            },
          })}
          placeholder="First Name"
        />
        <span>{errors?.firstName?.message}</span>
        <input
          {...register('lastName', { required: '필수항목입니다' })}
          placeholder="Last Name"
        />
        <span>{errors?.lastName?.message}</span>
        <input
          {...register('username', {
            required: '필수항목입니다',
            minLength: 10,
          })}
          placeholder="Username"
        />
        <span>{errors?.username?.message}</span>
        <input
          {...register('password', {
            required: '필수항목입니다',
            minLength: 5,
          })}
          placeholder="Password"
        />
        <span>{errors?.password?.message}</span>
        <input
          {...register('password1', {
            required: '비밀번호는 필수항목입니다',
            minLength: {
              value: 5,
              message: '비밀번호는 5자 이상이어야 합니다.',
            },
          })}
          placeholder="Password1"
        />
        <span>{errors?.password1?.message}</span>
        <button>Add</button>
        <span>{errors?.extraError?.message}</span>
      </form>
    </div>
  );
}

export default ToDoList;
