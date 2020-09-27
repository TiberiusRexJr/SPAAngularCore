using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace SPACoreAngular.Migrations
{
    public partial class Initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Lego",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    SerialNumber = table.Column<int>(nullable: false),
                    FirstName = table.Column<string>(nullable: true),
                    LastName = table.Column<string>(nullable: true),
                    Division = table.Column<string>(nullable: true),
                    age = table.Column<int>(nullable: false),
                    DOB = table.Column<DateTime>(nullable: false),
                    Role = table.Column<string>(nullable: true),
                    SecondaryRole = table.Column<string>(nullable: true),
                    rank = table.Column<string>(nullable: true),
                    CarrierAssinged = table.Column<string>(nullable: true),
                    WeaponOfChoice = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Lego", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Lego");
        }
    }
}
