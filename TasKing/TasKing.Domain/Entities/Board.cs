using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace TasKing.Domain.Entities
{
    [Table("Boards")]
    public class Board
    {
        #region Columns
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ID { get; set; }

        [Required,MaxLength(20)]
        public string Name { get; set; }

        [Required]
        [ForeignKey("Team")]
        public int TeamID { get; set; }
        public virtual Team Team { get; set; }
        #endregion

        public virtual List<List> Lists { get; set; }
    }
}
