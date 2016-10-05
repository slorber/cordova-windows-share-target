            
    console.debug("windowsShareTarget initialization");

    function launchAppWithShareTargetURI(shareOperation,shareTargetURI) {
        var protocolURI = new Windows.Foundation.Uri("stample:?shareTargetURI="+encodeURIComponent(shareTargetURI));
        Windows.System.Launcher.launchUriAsync(protocolURI)
            .then(function(success) {
              if (success) {
                console.debug("launchUriAsync success: "+shareTargetURI,arguments);
                shareOperation.reportCompleted();
              } 
              else {
                console.error("launchUriAsync failure: "+shareTargetURI,arguments);
                shareOperation.reportError("Technical error: can't open Stample application");
              }
            });
    }

    function activationHandler(args) {
        console.debug("activationHandler",args);
        if (args.detail.kind === Windows.ApplicationModel.Activation.ActivationKind.shareTarget) {
            console.debug("activationHandler shareTarget");
            var shareOperation = args.detail.shareOperation;
            try {
                if (shareOperation.data.contains(Windows.ApplicationModel.DataTransfer.StandardDataFormats.uri)) {
                    console.debug("URI share operation");
                    shareOperation.data.getUriAsync().done(function(uri) {
                        console.debug("uri", uri.absoluteUri);
                        launchAppWithShareTargetURI(shareOperation,uri.absoluteUri);
                    });
                }
            } catch(e) {
                console.error("Technical error: "+e.message,e);
                shareOperation.reportError("Technical error: "+e.message);
            }
        }
    };

    WinJS.Application.addEventListener("activated", activationHandler, false);
