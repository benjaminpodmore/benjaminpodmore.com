module "s3_bucket" {
  source      = "git::ssh://git@github.com/poddy-aws/terraform-aws-modules.git//modules/s3-bucket-static-site?ref=main"
  bucket_name = "bp-static-site-bucket"
}

module "cloudfront" {
  source                      = "git::ssh://git@github.com/poddy-aws/terraform-aws-modules.git//modules/cloudfront-s3-static-site?ref=main"
  bucket_id                   = module.s3_bucket.bucket_id
  bucket_arn                  = module.s3_bucket.bucket_arn
  bucket_regional_domain_name = module.s3_bucket.bucket_regional_domain_name
}

module "codepipeline" {
  source = "git::ssh://git@github.com/poddy-aws/terraform-aws-modules.git//modules/codepipeline-web-app?ref=main"
  project_name = "bp-static-site"
  github_repository_id = "benjaminpodmore/benjaminpodmore.com"
  github_repository_arn = "arn:aws:codestar-connections:ap-southeast-2:697930955232:connection/bb08b627-0e1e-46a9-b4b5-e5810494d309"
}