import { useFetchPosts } from '../../../../hooks/useBlog/useFetchPosts'
import Post from '../Post/index'
import Load from '../../../../components/Load/index'
import ErrorMessage from '../../../../components/ErrorMessage/index'

import { PostContainer, NoPostsMessage } from './styles'


const PostList = ({ count = null }) => {
  const { posts: visiblePosts = [], loading, error } = useFetchPosts(count)
  
  if (loading && visiblePosts.length === 0) return <Load />
  if (error) return <ErrorMessage message={error} />

  if (visiblePosts.length === 0) {
    return (
      <PostContainer centered>
        <NoPostsMessage>No posts found.</NoPostsMessage>
      </PostContainer>
    )
  }

  return (
    <>
      {visiblePosts.map((post, index) => (
        <Post post={post} key={post.id || `post-${index}`} />
      ))}
    </>
  )
}

export default PostList
