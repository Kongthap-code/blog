import ContainerStyle from '../styles/container'
import Aboutme from './aboutme'

function Container(props){
  return(
    <>
      <style jsx>{ContainerStyle}</style>
      <div className="container">
        <div className="content">{props.children}</div>
        <div className="aboutme"><Aboutme /></div>
        <div className="footer">
          <p>
            Created by Kongthap phuengsang
          </p>
        </div>
      </div>
    </>
  )
}

export default Container;

