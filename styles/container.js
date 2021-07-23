import css from 'styled-jsx/css'

const Container = css`

  .container{
    display: grid;
    grid-template-columns: 1fr 294px;
    grid-template-rows: 1fr 30%;
    min-width: 900px;
    transform: translateX(-50%);
    position: absolute;
    left: 50%;
    min-height: calc(100% - 60px);
    top: 53px;
  }

  .content{
    padding: 5px 25px 5px 25px;
  }

  .footer{
    text-align: center;
    grid-column: 1 / 3;
  }

  @media (max-width: 900px) {
    .container{
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr 30%;
      -webkit-transform: translateX(0);
      -ms-transform: translateX(0);
      width: auto;
      position:;
      min-width: 0;
      left: 0;
      min-height: 0;
      top: 0;
    }
    .content{
    padding-left: 5%;
    padding-right: 5%;
      grid-row: 2;
    }
    .footer{
      grid-column: 1;
      height: 0;
    }
    .aboutme{
      text-align: center;
    }
    
  }

`

export default Container;
