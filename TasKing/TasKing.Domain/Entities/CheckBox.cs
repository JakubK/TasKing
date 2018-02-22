using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace TasKing.Domain.Entities
{
    [Table("CheckBoxes")]
    public class CheckBox
    {
        #region Columns
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ID { get; set; }

        [Required]
        [ForeignKey("CheckList")]
        public int CheckListID { get; set; }
        public virtual CheckList CheckList { get; set; }

        [Required,MaxLength(20)]
        public string Name { get; set; }

        [Required,DefaultValue(false)]
        public bool Checked { get; set; }
        #endregion
    }
}
