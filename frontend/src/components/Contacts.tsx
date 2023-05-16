import useSWR from 'swr'


interface ListUsers {
    name: {
        first: string,
        last: string
    }
    gender: string
    email: string
    phone: string
    login: {
        uuid: string
    }
}

export default function Contacts() {
    const {data: users, error} = useSWR<ListUsers[]>('https://randomuser.me/api/?results=10');
    return (
        <>
            <p>Todos os contatos</p>
            <br/>
            {users && users.map((user: ListUsers) => (
                <div key={user.login.uuid}>
                    <p>{user.name.first}</p>
                    <p>{user.name.last}</p>
                    <p>{user.email}</p>
                    <p>{user.phone}</p>
                    <br/>
                </div>
            ))}
            {error && (<p>{error.message}</p>)}
        </>
    )
}