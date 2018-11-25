using System.Collections.Generic;
using System.Threading.Tasks;
using Model;

namespace Service
{
    public interface IPostRepository
    {
        Task<IEnumerable<Post>> GetAllPosts();
        Task<Post> GetPost(string id);
        Task AddPost(Post item);
        Task UpdatePost(string id, Post item);
        void RemovePost(string id);
    }
}
