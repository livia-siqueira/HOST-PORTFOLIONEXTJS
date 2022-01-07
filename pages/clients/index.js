
import Link from "next/link";

const ClientPage = () => {
    const clients = [
        {id: 'livia', name:"Livia"},
        {id: 'vera', name:"Vera"}
    ]
    return (

        <div>
           <h1>Clientes selecionados</h1>
           <ul>
                {clients.map((item) => <li key={item.id}>
                        <Link href={{
                            pathname: '/clients/[id]', 
                            query: {id: item.id}
                        }}>{item.name}</Link>
                    </li>

                )}                   
           </ul>
        </div>
    )
}

export default ClientPage;