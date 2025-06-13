import { useState, useEffect, useContext } from "react"

//css
import "./ProjectList.css"


/*  Componente compartilhado    */
import LikeFill from '../../assets/likeFill.svg'
import Like from '../../assets/like.svg'
import { AppContext } from '../../Contexts/AppContext'
import {getApiData} from '../../services/apiServices'
import Button from "../Button/Button"

 
// Utilidades


function ProjectList(props){
    const [projects, setProjects] = useState()
    const [favProjects, setFavProject] = useState([])
    const appContext = useContext(AppContext)

    const handleSavedProjects = (id) =>{
            setFavProject((prevFavProjects)=>{
                if(prevFavProjects.includes(id)){
                    const filterArray = prevFavProjects.filter((projectId) => projectId !==id)
                    sessionStorage.setItem('favProjects', JSON.stringify(filterArray))
                    return prevFavProjects.filter((projectId) => projectId !== id)
                } else {
                    sessionStorage.setItem('favProjects', JSON.stringify([...prevFavProjects, id]))
                    return[...prevFavProjects, id]
                }
            })
        }


    useEffect(()=>{
        const fetchData = async() =>{
            try{
                const projectsResponse = await getApiData('projects')
                setProjects(projectsResponse)
            }catch{
                setProjects([])
            }
        }
        fetchData()
    }, [])

    //Mudar o botão de like das imagens
    useEffect(()=>{
        const savedFavProjects = JSON.parse(sessionStorage.getItem('favProjects'))
        if(savedFavProjects){
            setFavProject(savedFavProjects)
        }
    },[])


    return(

        <div className="project-section" >
            <div className="project-hero">
                <h2>{appContext.languages[appContext.language].projects.title}</h2>
                <p>{appContext.languages[appContext.language].projects.subtitle}</p>
            </div>
            <div className="project-grid">
                {   
                    projects ?
                        projects.map((project)=>(
                            <div key={project.id} className="project-card d-flex jc-center al-center fd-column">
                                <div 
                                className="thumb primary-backgroud"
                                style = { {backgroundImage:`url(${project.thumb})`}}
                                ></div>
                                <h3>{project.title}</h3>
                                <p>{project.subtitle}</p>
                                <Button buttonStyle="unstyled" onClick={()=>handleSavedProjects(project.id)}>
                                    <img src={favProjects.includes(project.id) ?  Like : LikeFill} height={"20px"}/>
                                </Button>
                                
                            </div>
                        )) 
                    : null
                }
            </div>
        </div>
    )
}

export default ProjectList