import { useRouter } from 'next/router'


const PortfolioProject = () => {
    const router = useRouter();

    //console.log(router.pathname)
    //console.log(router.query) //valor dinamico passado na url
    //pegar id pedido: router.query.id

    
    return (
        <div>
            <h2>The Portfolio Page</h2>
        </div>
    )
}

export default PortfolioProject;