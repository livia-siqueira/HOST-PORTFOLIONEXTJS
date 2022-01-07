

import { useRouter } from "next/router";

const ClientProjectsPage = () => {
    const router = useRouter();

    const loadProjectHandler = () => {
        //router.push('/clients/max/project')
        //router.replace()
        router.push({
            pathname: '/clients/[id]/[clientprojectid]',
            query: {id: 'max', clientprojectid: 'project1'}
        })
    }
    return (
        <div>
            Projetos de 1 unico cliente
            <button onClick={loadProjectHandler}>Load Project A</button>
        </div>
    )
}

export default ClientProjectsPage;