using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(my_portfolio.Startup))]
namespace my_portfolio
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
