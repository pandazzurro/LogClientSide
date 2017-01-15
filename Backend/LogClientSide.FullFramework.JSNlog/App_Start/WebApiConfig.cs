using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Routing;

namespace LogClientSide.JSNlog
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Web API configuration and services
            var cors = new EnableCorsAttribute("*", "*", "*");
            config.EnableCors(cors);

            // Web API routes
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );

            //var jsnlogRoute = new Route("{*jsnloglogger}", new StopRoutingHandler());
            //jsnlogRoute.Constraints = new RouteValueDictionary { { "jsnloglogger", @"jsnlog\.logger(/.*)?" } };
            //RouteTable.Routes.Insert(0, jsnlogRoute);
        }
    }
}
