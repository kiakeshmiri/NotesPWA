using System;
using Microsoft.Extensions.Options;
using Model;
using System.Threading.Tasks;
using System.Collections.Generic;
using MongoDB.Bson;
using MongoDB.Driver;
using DataAccess;

namespace Service
{
    public class PostRepository : IPostRepository
    {
        private readonly DBContext _context = null;

        public PostRepository()
        {
            _context = new DBContext();
        }

        public async Task<IEnumerable<Post>> GetAllPosts()
        {
            try
            {
                return await _context.Posts
                        .Find(_ => true).ToListAsync();
            }
            catch (Exception ex)
            {
                // log or manage the exception
                throw ex;
            }
        }

        public async Task<Post> GetPost(string id)
        {
            var filter = Builders<Post>.Filter.Eq("_id", id);

            try
            {
                return await _context.Posts
                                .Find(filter)
                                .FirstOrDefaultAsync();
            }
            catch (Exception ex)
            {
                // log or manage the exception
                throw ex;
            }
        }

        public async Task AddPost(Post item)
        {
            try
            {
                await _context.Posts.InsertOneAsync(item);
            }
            catch (Exception ex)
            {
                // log or manage the exception
                throw ex;
            }
        }
        public async Task UpdatePost(string id, Post item)
        {
            try
            {
                ObjectId objectId = ObjectId.Parse(id);
                var filter = Builders<Post>.Filter.Eq("_id", objectId);
                var update = Builders<Post>.Update.Set(x => x.title, item.title).Set("content", item.content);
                var result = await _context.Posts.UpdateOneAsync(filter, update);  
            }
            catch (Exception ex)
            {
                // log or manage the exception
                throw ex;
            }
        }


        public async void RemovePost(string id)
        {
            try
            {                
                ObjectId objectId = ObjectId.Parse(id);
                await _context.Posts.DeleteOneAsync(Builders<Post>.Filter.Eq("_id", objectId));
            }
            catch (Exception ex)
            {
                // log or manage the exception
                throw ex;
            }
        }
    }
}
