import P from 'prop-types';

export function SearchShow({ posts }) {
  console.log(posts);
  return <>Olá</>;
}

SearchShow.propTypes = {
  posts: P.arrayOf({}),
};
