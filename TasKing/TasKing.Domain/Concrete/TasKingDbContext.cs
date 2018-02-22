using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using TasKing.Domain.Entities;

namespace TasKing.Domain.Concrete
{
    public class TasKingDbContext : DbContext
    {
        public TasKingDbContext(DbContextOptions<TasKingDbContext> options) : base(options)
        {

        }

        //protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        //{
        //   // optionsBuilder.UseMySQL("server=localhost;database=TasKing;user=root;password=root123");
        //}

        public DbSet<Board> Boards { get; set;}
        public DbSet<BoardLog> BoardLogs { get; set;}
        public DbSet<CheckBox> CheckBoxes { get; set;}
        public DbSet<CheckList> CheckLists { get; set;}
        public DbSet<List> Lists { get; set;}
        public DbSet<Membership> Memberships { get; set;}
        public DbSet<Task> Tasks { get; set;}
        public DbSet<Team> Teams { get; set;}
        public DbSet<User> Users { get; set;}
    }
}
