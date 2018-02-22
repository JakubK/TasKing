using System;
using System.Collections.Generic;
using System.Text;
using TasKing.Domain.Abstract;
using TasKing.Domain.Entities;

namespace TasKing.Domain.Concrete
{
    public class Repository : IRepository
    {
        private TasKingDbContext dbContext;

        public void AddUser(string name)
        {
            dbContext.Users.Add(new User { Nick = name,Email = "JD@gmail.com", PasswordHashed="ddd" });
            dbContext.SaveChanges();
        }

        public Repository(TasKingDbContext context)
        {
            this.dbContext = context;
        }

        public IEnumerable<Board> Boards
        {
            get { return dbContext.Boards; }
        }

        public IEnumerable<BoardLog> BoardLogs
        {
            get { return dbContext.BoardLogs; }
        }

        public IEnumerable<CheckBox> CheckBoxes
        {
            get { return dbContext.CheckBoxes; }
        }

        public IEnumerable<CheckList> CheckLists
        {
            get { return dbContext.CheckLists; }
        }

        public IEnumerable<List> Lists
        {
            get { return dbContext.Lists; }
        }

        public IEnumerable<Membership> Memberships
        {
            get { return dbContext.Memberships; }
        }

        public IEnumerable<Task> Tasks
        {
            get { return dbContext.Tasks; }
        }

        public IEnumerable<Team> Teams
        {
            get { return dbContext.Teams; }
        }

        public IEnumerable<User> Users
        {
            get { return dbContext.Users; }
        }

    }
}
