using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace TasKing.Domain.Entities
{
    [Table("Tasks")]
    public class Task
    {
        #region Columns
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ID { get; set; }

        [Required]
        public string Title { get; set; }

        [MaxLength(100)]
        public string Description { get; set; }

       [ForeignKey("List")]
       public int ListID { get; set; }
       public virtual List List { get; set; }

        [ForeignKey("Membership")]
        public int AssignedUserID { get; set; }
        public Membership Membership { get; set; }
        #endregion

        public virtual List<CheckList> CheckLists { get; set; }
    }
}
