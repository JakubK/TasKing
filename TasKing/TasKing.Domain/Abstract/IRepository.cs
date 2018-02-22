using System;
using System.Collections.Generic;
using System.Text;
using TasKing.Domain.Entities;

namespace TasKing.Domain.Abstract
{
    public interface IRepository
    {
        IEnumerable<Board> Boards { get; }
        IEnumerable<BoardLog> BoardLogs { get; }
        IEnumerable<CheckBox> CheckBoxes { get; }
        IEnumerable<CheckList> CheckLists { get; }
        IEnumerable<List> Lists { get; }
        IEnumerable<Membership> Memberships { get; }
        IEnumerable<Task> Tasks { get; }
        IEnumerable<Team> Teams { get; }
        IEnumerable<User> Users { get; }

        void AddUser(string name);
    }
}
