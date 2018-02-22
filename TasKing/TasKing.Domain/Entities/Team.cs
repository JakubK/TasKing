using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace TasKing.Domain.Entities
{
    [Table("Teams")]
    public class Team
    {
        #region Columns
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ID { get; set; }

        [Required]
        [MaxLength(30)]
        public string Name { get; set; }

        [Required]
        public int OwnerID { get; set; }
        #endregion

        public virtual List<Membership> Memberships { get; set; }
        public virtual List<Team> Teams { get; set; }
    }
}
