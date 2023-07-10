import './styles/Projects.css';
import p2 from './images/projects/p2.png';
import p3 from './images/projects/p3.png'
import p4 from './images/projects/p4.png'
import git from './images/contact/github.png'
import web from './images/contact/web.png'

function Projects() {

    let projects = [
        {
            id    : 1,
            img   : p2,
            title : ' Stock Alerter',
            tech  : ' Reactjs, CSS, Bootstrap.',
            desc  : ' Stock Alerter is a web application that helps users set an alert for a user-defined price and the user will get an alert mail when the stock hits the user-defined price.',
            github: ' https://github.com/saitejarailla/stock_alerter_1',
            web : 'https://stock-alerter.netlify.app/',
            deploy : true
        },
        {
            id  : 2,
            img : p3 ,
            title : 'portfolio',
            tech  : ' Reactjs, CSS, Bootstrap.',
            desc  : 'Discover my portfolio website, a captivating showcase of my skills, projects, certifications, and personal details, elegantly designed to impress and engage visitors.',
            github: 'https://github.com/saitejarailla/portfolio',
            web : 'https://saitejarailla.netlify.app/',
            deploy : true
        },
        {
            id  : 2,
            img : p4 ,
            title : 'food donation website',
            tech  : ' Reactjs, CSS, Bootstrap.',
            desc  : 'Developed a web-based application using React js that acts as an interface between food donors and recipients.',
            github: 'https://github.com/saitejarailla/fooddonation1',
            web : '',
            deploy : false
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
                                                    if (1) 
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
                                                                        <a href={project.github} ><img src={git} className='git' style={{width:'40px'}}></img></a>
                                                                        {(project.deploy)&&
                                                                        <a href={project.web} ><img className='web' src={web} style={{width:'40px'}}></img></a>}
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