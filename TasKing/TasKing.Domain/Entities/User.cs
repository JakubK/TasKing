using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace TasKing.Domain.Entities
{
    [Table("Users")]
    public class User
    {
        #region Columns
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ID { get; set; }

        [Required]
        public string Nick { get; set; }

        [Required]
        [EmailAddress]
        public string Email { get; set; }

        [Required,MaxLength(64)]
        public string PasswordHashed { get; set; }
        #endregion

        public virtual List<Membership> Memberships { get; set; }
    }
}
