import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { FaRegHeart } from 'react-icons/fa';
import P from 'prop-types';

import api from '../../services/axios';
import { Button } from './style';

export default function LikeButton({ id, likes, type }) {
  const [userLiked, setUserLiked] = useState(false);
  const [likesPost, setLikesPost] = useState(likes);
  const user = useSelector((state) => state.auth.user);

  const handleLike = async () => {
    try {
      switch (type) {
        case 'post': {
          const { response } = await (await api.patch(`postLike/${id}`)).data;
          setUserLiked(!userLiked);
          setLikesPost(response.likes);
          break;
        }
        case 'question': {
          const { response } = await (await api.patch(`questionLike/${id}`)).data;
          setUserLiked(!userLiked);
          setLikesPost(response.likes);
          break;
        }
        default: {
          toast.error('Erro ao realizar ação.');
          break;
        }
      }
    } catch (err) {
      console.log(err);
      toast.success('Erro ao realizar ação');
    }
  };

  useEffect(() => {
    if (likes.length > 0) {
      likes.map((like) => {
        if (like.user === user._id) {
          setUserLiked(true);
        }
      });
    }
  }, [id, likes, user._id]);

  return (
    <Button onClick={handleLike}>
      <FaRegHeart size={18} color={userLiked ? '#ff6961' : '#111'} />
      <span>{likesPost.length}</span>
    </Button>
  );
}

LikeButton.propTypes = {
  id: P.string.isRequired,
  likes: P.array.isRequired,
  type: P.string.isRequired,
};
