﻿using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Net.Http.Headers;
using System;
using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;

namespace DotNetNote.Controllers
{
    public class CkEditorDemoController : Controller
    {
        private IHostingEnvironment _environment;

        public CkEditorDemoController(IHostingEnvironment environment)
        {
            _environment = environment;
        }

        public IActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Index(string editor)
        {
            ViewBag.Text = editor; 

            return View();
        }


        public IActionResult UploadToAzureBlob()
        {

            return View(); 
        }

        [HttpPost]
        public async Task<ActionResult> UploadImage(
            ICollection<IFormFile> upload, 
            string CKEditorFuncNum, 
            string CKEditor,
            string langCode
        )
        {
            string imgPath = "";
            string msg = "";
            var uploadFolder = Path.Combine(_environment.WebRootPath, "files");

            try
            {
                foreach (var file in upload)
                {

                    if (file != null && file.Length > 0)
                    {
                        var fileName = 
                            Path.GetFileName(
                                DateTime.Now.ToString("yyyyMMdd-HHMMssff") 
                                + " - " 
                                + ContentDispositionHeaderValue.Parse(
                                    file.ContentDisposition)
                                    //.FileName.Trim('"'));
                                    .FileName.Trim());

                        using (var fileStream = new FileStream(
                            Path.Combine(uploadFolder, fileName)
                            , FileMode.Create))
                        {
                            await file.CopyToAsync(fileStream);
                        }

                        imgPath = Url.Content("/files/" + fileName);
                        msg = "이미지가 정상적으로 업로드되었습니다.";
                    }
                }
            }
            catch (Exception e)
            {
                msg = "오류가 발생했습니다. 오류메시지: " + e.Message;
            }
            string r = @"<script>window.parent.CKEDITOR.tools.callFunction(" 
                + CKEditorFuncNum + ", \"" + imgPath + "\", \"" 
                + msg + "\");</script>";
            return Content(r, "text/html");
        }
    }
}