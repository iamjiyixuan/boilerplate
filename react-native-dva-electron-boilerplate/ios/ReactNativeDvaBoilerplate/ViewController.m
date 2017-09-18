//
//  ViewController.m
//  ReactNativeDvaBoilerplate
//
//  Created by 计轶轩 on 2017/9/18.
//  Copyright © 2017年 iamjiyixuan. All rights reserved.
//

#import "ViewController.h"
// rn
#import <React/RCTRootView.h>

@interface ViewController ()

@property(nonatomic, strong) RCTRootView *rootView;

@end

@implementation ViewController

- (void)viewDidLoad
{
    [super viewDidLoad];

    NSURL *jsCodeLocation = [NSURL URLWithString:@"http://192.168.1.79:8081/index.ios.bundle?platform=ios"];
    self.rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                moduleName:@"App"
                                         initialProperties:nil
                                             launchOptions:nil];
    self.rootView.frame = [UIScreen mainScreen].bounds;
    [self.view addSubview:self.rootView];
}

- (void)didReceiveMemoryWarning
{
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}


@end
