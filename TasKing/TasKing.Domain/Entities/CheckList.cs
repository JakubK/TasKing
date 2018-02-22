using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace TasKing.Domain.Entities
{
    [Table("CheckLists")]
    public class CheckList
    {
        #region Columns
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ID { get; set; }

        [Required]
        [ForeignKey("Task")]
        public int TaskID { get; set; }
        public virtual Task Task { get; set; }

        [MaxLength(20)]
        public string Title { get; set; }
        #endregion

        public virtual List<CheckBox> CheckBoxes { get; set; }
    }
}
