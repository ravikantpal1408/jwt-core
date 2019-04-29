using System;

namespace WebAPI.Models{
    public class Customer : ApplicationUser
    {
        public ApplicationUser ApplicationUserId { get; set; }

        public string Mobile { get; set; }

        public string HomePhone { get; set; }

        public string Occupation { get; set; }

        public string Type { get; set; }

        public DateTime ListDate { get; set; }
        
    }


    public class Site
    {
        public int Id { get; set; }
        public ApplicationUser CustomerId { get; set; }

        public string PropertyName { get; set; }

        public string PropertyAddress { get; set; }

        public DateTime ListDate { get; set; }
    }

}