import { useNavigate } from 'react-router-dom'
import useUserPosts from '../../../../../../hooks/useBlog/useUserPosts'
import PostList from '../../../../../../components/PostList/index'

import { Section, Contain, PostsHeader } from './postsStyle'


const Posts = () => {
  const { publishedPosts, draftPosts, loading, error } = useUserPosts()
  const navigate = useNavigate()

  const handleViewPost = (postId, isDraft) => {
    navigate(`/post/${postId}`, { state: { isDraft } })
  }

  if (loading) return <p>Loading posts...</p>
  if (error) return <p>{error}</p>

  return (
    <Section>
    <Contain>
      <PostsHeader>Your Posts</PostsHeader>
      <PostList 
        posts={draftPosts} 
        title="Draft's" 
        isDraft={true} 
        handleView={handleViewPost} 
      />
      <PostList 
        posts={publishedPosts} 
        title="Published" 
        isDraft={false} 
        handleView={handleViewPost} 
      />
    </Contain>
    </Section>
  )
}

export default Posts
