import Link from 'next/link';
import { Fragment } from 'react';

const title = 'Gujarat State Institutional Ranking Framework (GSIRF)';

const commentList = [
  {
    desc: 'GSIRF 2021',
    link: 'https://charusat.ac.in/iqac/gsirf/GSIRF-2021-Score%20Card.pdf',
  },
  {
    desc: 'GSIRF 2020',
    link: 'https://charusat.ac.in/iqac/gsirf/GSIRF%202020%20-%20SCORE%20CARDS%20-%20CHARUSAT.pdf',
  },
  {
    desc: 'GSIRF 2019',
    link: 'https://charusat.ac.in/iqac/gsirf/GSIRF%202019_SCORE%20CARD%20of%20CHARUSAT.pdf',
  },
];

const GSIRF = () => {
  return (
    <Fragment>
      <div className="comments">
        <h4 className="title-border">{title}</h4>
        <ul className="comment-list">
          {commentList.map((val, i) => (
            <li className="comment" key={i}>
              <div className="com-content">
                <div className="com-title">
                  <div className="com-title-meta">
                    {val.link.startsWith('http') ? (
                      <a href={val.link} target="_blank" rel="noopener noreferrer">
                        <span>{val.desc}</span>
                      </a>
                    ) : (
                      <Link href={val.link} >
                       
                          <span>{val.desc}</span>
                        
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Fragment>
  );
};

export default GSIRF;
