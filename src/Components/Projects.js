import './styles/Projects.css';
import p1 from './images/projects/p2.jpg';

function Projects() {

    let projects = [
        {
            id    : 1,
            img   : p1,
            title : ' Stock Alerter',
            tech  : ' Reactjs, CSS, Bootstrap.',
            desc  : ' Stock Alerter is a web application that helps users set an alert for a user-defined price and the user will get an alert mail when the stock hits the user-defined price.',
            github: ' https://github.com/saitejarailla/stock_alerter_1'
        },
        
        {
            id    : 3,
            img   : p1,
            title : ' ',
            tech  : ' ',
            desc  : ' ',
            github: ' '
        }
    ]

    return (  
        <div>
            <div className="ProjectsBackground">
                <div style={{height:'10vh',backgroundColor:'transparent'}}></div>
                {
                    projects.map(
                                    (project) =>
                                                {
                                                    if (project.id % 2 !=0) 
                                                        return(
                                                            <div style={{backgroundColor: 'white',border: '1px solid'}} className='row m-4'>
                                                                <div className='row m-1'>
                                                                    <div className='col-12 col-md-6 col-lg-5 col-xl-4 my-auto py-2' >
                                                                        <img src={project.img}  width='100%'/>
                                                                    </div>
                                                                    <div className='col-12 col-md-6 col-lg-7 col-xl-8 my-auto py-4 oddProjectDesc'>
                                                                        <p><b>Title :</b>{project.title}</p>
                                                                        <p><b>Technologies :</b>{project.tech}</p>
                                                                        <p><b>Description :</b>{project.desc}</p>
                                                                        <p><b>GitHub :</b><a href={project.github}> Click here to visit {project.title} code.</a></p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    if (project.id % 2 ==0)
                                                        return(
                                                            <div style={{backgroundColor: 'white',border: '1px solid'}} className='row m-4'>
                                                                <div className='row m-1'>
                                                                    <div className='col-12 col-md-6 col-lg-5 col-xl-4 my-auto py-2 order-md-2' >
                                                                        <img src={project.img}  width='100%'/>
                                                                    </div>
                                                                    <div className='col-12 col-md-6 col-lg-7 col-xl-8 my-auto py-4 evenProjectDesc order-md-1'>
                                                                        <p><b>Title :</b>{project.title}</p>
                                                                        <p><b>Technologies :</b>{project.tech}</p>
                                                                        <p><b>Description :</b>{project.desc}</p>
                                                                        <p><b>GitHub :</b><a href={project.github}> Click here to visit {project.title} code.</a></p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                }                        
                                                
                                )
                }
                <div style={{height:'5vh',backgroundColor:'transparent'}}></div>
            </div>
        </div>
    );
}

export default Projects;