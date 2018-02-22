using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace TasKing.Domain.Entities
{
    public class BoardLog
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ID { get; set; }

        [Required]
        [ForeignKey("Board")]
        public int BoardID { get; set; }
        public Board Board { get; set; }

        [Required]
        public int UserEditorID { get; set; }

        [Required]
        public string Description { get; set; }
    }
}
