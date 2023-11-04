import styled from "styled-components";

export const CardContainer = styled.div`
    background: rgb(248 236 248);
    display: flex;
    text-align: justify;
    padding: 20px;
    max-width: 900px;
    gap: 10px;
    margin-bottom: 10px;
    h2 {
        color: rgb(105 148 191);
    }

    h4 {
        color: grey;
    }

    img {
        border-radius: 5px;
        width: 200px;
        height: 250px;
    }
    
    div {
        display: flex;
        gap: 0 10px;
        padding: 15px;

    }

    span {
        color: rgb(105 148 191);
        font-size: 20px;
        font-weight: 700;
    }   
`;

export const Pstyled = styled.p`
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const SpanStyled = styled(Pstyled)`
    color: rgb(105 148 191);
`;

export const MetascoreStyled = styled(Pstyled)`
    color: white;
    padding: 1px 3px;
    border-radius: 2px;
    background-color: ${(props) => {
    const metascore = parseInt(props.children);
    if (metascore >= 0 && metascore <= 49) {
      return 'red';
    } else if (metascore >= 50 && metascore <= 59) {
      return 'yellow';
    } else if (metascore >= 60 && metascore <= 100) {
      return 'green';
    }
  }};
`;

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 800px;
`;


export const Plotstyled = styled.p`
     max-width: 600px;
`;



