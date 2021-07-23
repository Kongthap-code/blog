import css from 'styled-jsx/css';

const Infouser =css`
  .Aboutmecontent {
    padding: 5px 25px 5px 25px;
  }

  .profile{
    width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
		object-fit: cover;
    margin: 0 auto;
		border-radius: 100%;
  }

  .block-start-1 {
    margin-block-start: 1em;
  }

  .name{
    font-size: 22px;
    text-align: center;
  }
  
	a {
		color: black;
    padding-right: 6px;
	}

  .status{
    margin-block-start: 1em;
    margin-block-end: 1em;
    text-align: center;
  }
`;

export default Infouser;
