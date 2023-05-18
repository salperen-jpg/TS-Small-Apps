import { ISingleDef } from "../context";
import { styled } from "styled-components";
import { nanoid } from "nanoid";
import Meaning from "./Meaning";
const Meanings: React.FC<ISingleDef> = ({ meanings, sourceUrls }) => {
  return (
    <Wrapper>
      <div className='section-center'>
        {meanings.map((meaning) => {
          return <Meaning key={nanoid()} {...meaning} />;
        })}
      </div>
      <div className='source'>
        <small>Source</small>
        <small>{sourceUrls}</small>
      </div>
    </Wrapper>
  );
};
export default Meanings;

const Wrapper = styled.article`
  .source {
    padding: 2.5rem 0;
    display: flex;
    gap: 1rem;
  }
`;
