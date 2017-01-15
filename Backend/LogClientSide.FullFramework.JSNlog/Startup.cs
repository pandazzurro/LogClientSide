using System;
using System.Threading.Tasks;
using Microsoft.Owin;
using Owin;
using Serilog;
using Microsoft.Azure;
using Microsoft.WindowsAzure.Storage;
using Microsoft.WindowsAzure.Storage.Auth;
using System.Web.Http;
using JSNLog;

[assembly: OwinStartup(typeof(LogClientSide.JSNlog.Startup))]

namespace LogClientSide.JSNlog
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            HttpConfiguration config = new HttpConfiguration();

            CloudStorageAccount storageAccount = CloudStorageAccount.Parse(CloudConfigurationManager.GetSetting("StorageConnectionString"));
            Log.Logger = new LoggerConfiguration()
                .Destructure.ToMaximumDepth(10)
                .MinimumLevel.Is(Serilog.Events.LogEventLevel.Verbose)
                .WriteTo.AzureTableStorage(storageAccount, Serilog.Events.LogEventLevel.Verbose, period: TimeSpan.FromSeconds(2), storageTableName: "logger", writeInBatches: true)
                .CreateLogger();

            WebApiConfig.Register(config);

            app.UseWebApi(config);
            app.UseJSNLog();
            app.UseCors(Microsoft.Owin.Cors.CorsOptions.AllowAll);
        }
    }
}