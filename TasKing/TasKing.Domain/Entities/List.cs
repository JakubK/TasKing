using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace TasKing.Domain.Entities
{
    [Table("Lists")]
    public class List
    {
        #region Columns
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ID { get; set; }

        [Required]
        [MaxLength(30)]
        public string Title { get; set; }

        [ForeignKey("Board")]
        public int BoardID { get; set; }
        public virtual Board Board { get; set; }
        #endregion

        public virtual List<Task> Tasks { get; set; }
    }
}
